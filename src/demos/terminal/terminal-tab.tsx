import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./tab.scss";
import "./hterm_all.js";
import SockJS from "sockjs-client";

const { htermLib, hterm } = window;

const TerminalTab = () => {
  const [loading, setLoading] = useState(false);
  const websocketRef = useRef<WebSocket>();
  const terminalRef = useRef<any>();
  const terminalIoRef = useRef<any>();
  const connctState = useRef({
    connected: false,
  });
  const [urlParams, setUrlParams] = useState({
    container: "",
    type: "",
    id: "",
    unitId: "",
    pod: "",
  });

  const init = async () => {
    setLoading(true);
    await initTerminal();
  };

  useEffect(() => {
    init();
  }, [urlParams]);

  const onTerminalReady = async () => {
    const io = terminalRef.current.io.push();
    terminalIoRef.current = io;
    io.onVTKeystroke = (str: string) => {
      if (connctState.current.connected) {
        websocketRef.current?.send(
          JSON.stringify({
            Op: "stdin",
            Data: str,
            Cols: terminalRef.current.screenSize.width,
            Rows: terminalRef.current.screenSize.height,
          })
        );
      }
    };
    io.sendString = (str: string) => {
      if (connctState.current.connected) {
        websocketRef.current?.send(
          JSON.stringify({
            Op: "stdin",
            Data: str,
            Cols: terminalRef.current.screenSize.width,
            Rows: terminalRef.current.screenSize.height,
          })
        );
      }
    };
    io.onTerminalResize = (cols: number, rows: number) => {
      if (connctState.current.connected) {
        websocketRef.current?.send(
          JSON.stringify({
            Op: "resize",
            Cols: cols,
            Rows: rows,
          })
        );
      }
    };
  };

  const initTerminal = async () => {
    if (terminalRef.current) {
      terminalRef.current.clear();
      terminalRef.current.clearScrollback();
      terminalRef.current = undefined;
    }
    await htermLib.init();
    hterm.defaultStorage = new htermLib.Storage.Memory();
    terminalRef.current = new hterm.Terminal();
    // terminalRef.current.prefs_.set("color-palette-overrides", [
    //   "#073642" /*  0: black    */,
    //   "#dc322f" /*  1: red      */,
    //   "#859900" /*  2: green    */,
    //   "#b58900" /*  3: yellow   */,
    //   "#268bd2" /*  4: blue     */,
    //   "#d33682" /*  5: magenta  */,
    //   "#2aa198" /*  6: cyan     */,
    //   "#eee8d5" /*  7: white    */,
    //   "#002b36" /*  8: brblack  */,
    //   "#cb4b16" /*  9: brred    */,
    //   "#586e75" /* 10: brgreen  */,
    //   "#657b83" /* 11: bryellow */,
    //   "#839496" /* 12: brblue   */,
    //   "#6c71c4" /* 13: brmagenta */,
    //   "#93a1a1" /* 14: brcyan   */,
    //   "#fdf6e3" /* 15: brwhite  */,
    //   "rgba(102, 204, 255, 0.8)",
    // ]);
    // terminalRef.current.prefs_.set('color-palette-overrides', [
    //         '#282A2E', '#373B41',   // black
    //         '#A54242', '#CC6666',   // red
    //         '#8C9440', '#B5BD68',   // green
    //         '#DE935F', '#F0C674',   // yellow
    //         '#5F819D', '#81A2BE',   // blue
    //         '#85678F', '#B294BB',   // magenta
    //         '#5E8D87', '#8ABEB7',   // cyan
    //         '#707880', '#C5C8C6'    // white
    // ]);
    // terminalRef.current.prefs_.set('enable-bold', false);

    // terminalRef.current.prefs_.set('cursor-color', 'rgba(197, 200, 198, 0.5)');
    // terminalRef.current.prefs_.set('background-color', '#1D1F21');
    // terminalRef.current.prefs_.set('foreground-color', '#C5C8C6');

    // Run in the JavaScript console of the hterm browser window
    const term_ = terminalRef.current;
    var colorPaletteOverides = [
      "#073642" /*  0: black    */,
      "#dc322f" /*  1: red      */,
      "#859900" /*  2: green    */,
      "#b58900" /*  3: yellow   */,
      "#268bd2" /*  4: blue     */,
      "#d33682" /*  5: magenta  */,
      "#2aa198" /*  6: cyan     */,
      "#eee8d5" /*  7: white    */,
      "#002b36" /*  8: brblack  */,
      "#cb4b16" /*  9: brred    */,
      "#586e75" /* 10: brgreen  */,
      "#657b83" /* 11: bryellow */,
      "#839496" /* 12: brblue   */,
      "#6c71c4" /* 13: brmagenta*/,
      "#93a1a1" /* 14: brcyan   */,
      "#fdf6e3" /* 15: brwhite  */,
    ];

    var htermProfiles = [
      // Solarized Dark {base03:base0}
      {
        name: "solarized-dark",
        prefs: {
          "background-color": colorPaletteOverides[8],
          "foreground-color": colorPaletteOverides[12],
          //'cursor-color': colorPaletteOverides[11],
          "cursor-color": "rgba(131, 148, 150, 0.5)",
        },
      },
      // Solarized Light {base3:base00}
      {
        name: "solarized-light",
        prefs: {
          // 'background-color': colorPaletteOverides[15],
          // 'foreground-color': colorPaletteOverides[10],

          "background-color": "#fdf6e3",
          "foreground-color": "#657b83",
          //'cursor-color': colorPaletteOverides[8],
          "cursor-color": "rgba(101, 123, 131, 0.5)",
        },
      },
    ];

    function setProfilePrefs(profile_name, prefs) {
      term_.setProfile(profile_name);
      for (var name in prefs) {
        term_.prefs_.set(name, prefs[name]);
      }
      //term_.prefs_.set('environment', {"TERM": "xterm-color"});
      // Use ANSI 16 colour terminal
      term_.prefs_.set("environment", { TERM: "xterm-16color" });
      term_.prefs_.set("color-palette-overrides", colorPaletteOverides);
      term_.prefs_.set("enable-bold", true);
      term_.prefs_.set("enable-bold-as-bright", false);
    }

    htermProfiles.forEach(function (profile) {
      setProfilePrefs(profile.name, profile.prefs);
      if (profile.name == "solarized-dark") {
        setProfilePrefs("default", profile.prefs);
      }
    });

    // term_.setProfile('solarized-dark');
    term_.setProfile("solarized-light");

    terminalRef.current.onTerminalReady = onTerminalReady;
    terminalRef.current?.decorate(document.querySelector("#terminal"));
    terminalRef.current.prefs_.set("cursor-blink", true);
    // terminalRef.current.prefs_.set('cursor-color', '#fff')
    // terminalRef.current.prefs_.set("background-color", "#eee");
    // terminalRef.current.prefs_.set("foreground-color", "#000");

    setTimeout(() => {
      terminalRef.current.installKeyboard();
      // terminalRef.current.keyboard.bindings.addBinding('esc', () => {
      //   setIsFull(false)
      // })
    }, 50);
  };

  return (
    <div>
      <div id="terminal"></div>
    </div>
  );
};

export default TerminalTab;
