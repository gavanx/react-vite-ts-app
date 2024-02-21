import { getLarkUsersInfoApi, searchUserDeptFuzzyApi } from '@/api'
import { isSuccess } from '@/utils/request'
import { IPerson } from './types'

// 获取当前光标选取的信息（即在弹出选人之前，把输入框中此刻的光标位置先记下来）
export const getEditorRange = () => {
  let range = null
  let selection = null
  if (window.getSelection) {
    selection = window.getSelection()
    if (selection && selection.getRangeAt) {
      // 获取第一个选择范围，在除 Firefox 之外的所有浏览器中，仅使用 0
      range = selection.getRangeAt(0)
      return {
        range,
        selection,
      }
    } else {
      return null
    }
  } else {
    return null
  }
}

// 重新设置光标的位置
export const resetRange = (range) => {
  if (range) {
    const selection = window.getSelection()
    if (selection) {
      selection.removeAllRanges()
      selection.addRange(range)
    } else if (range.select) {
      range.select()
    }
  }
}

// 获取光标坐标
export const getSelectionCoords = () => {
  const win = window
  const doc = win.document
  let sel = doc.selection
  let range
  let rects
  let rect
  let x = 0
  let y = 0
  if (sel) {
    if (sel.type !== 'Control') {
      range = sel.createRange()
      range.collapse(true)
      x = range.boundingLeft
      y = range.boundingTop
    }
  } else if (win.getSelection) {
    sel = win.getSelection()
    if (sel.rangeCount) {
      range = sel.getRangeAt(0).cloneRange()
      if (range.getClientRects) {
        range.collapse(true)
        rects = range.getClientRects()
        if (rects.length > 0) {
          rect = rects[0]
        }
        // 光标在行首时，rect为undefined
        if (rect) {
          x = rect.left
          y = rect.top
        }
      }
      if ((x === 0 && y === 0) || rect === undefined) {
        const span = doc.createElement('span')
        if (span.getClientRects) {
          span.appendChild(doc.createTextNode('\u200b'))
          range.insertNode(span)
          rect = span.getClientRects()[0]
          x = rect.left
          y = rect.top
          const spanParent = span.parentNode
          spanParent.removeChild(span)
          spanParent.normalize()
        }
      }
    }
  }
  return { x, y }
}

// 通过关键词搜索用户列表
export const fetchUsers = async (query, cancelToken, callback) => {
  if (!query) return

  const searchRes =
    (await searchUserDeptFuzzyApi(
      {
        findKey: query,
        searchType: 1,
        size: 50,
        page: 1,
      },
      undefined,
      cancelToken
    )) || {}

  const { data: users = [] } = searchRes
  const userList: IPerson[] = users.map((user) => ({
    userId: user.id,
    userName: user.name,
    deptName: user.namePath,
  }))

  callback(userList)
}

// 填充openId
export const fillUserOpenId = async (userItem: IPerson) => {
  let result: {
    userId: string
    userName: string
    deptName: string
    openId?: any
  } = userItem
  const res = await getLarkUsersInfoApi([userItem?.userId], undefined)
  if (isSuccess(res)) {
    const openIdItem = res?.data.find((resItem) => resItem.employee_id === userItem.userId)
    result = { ...userItem, openId: openIdItem?.open_id }
  }
  return result
}
