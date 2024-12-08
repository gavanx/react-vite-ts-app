const TASK_COUNT = 10000000
var tasksNum = TASK_COUNT;

function unImportWork(deadline) {
  while (deadline.timeRemaining() && tasksNum > 0) {
    console.log(`执行了${10000 - tasksNum + 1}个任务`);
    tasksNum--;
  }
  if (tasksNum > 0) {
    // 在未来的帧中继续执行
    requestIdleCallback(unImportWork);
  }
}

export default () => {
  tasksNum = TASK_COUNT;
  requestIdleCallback(unImportWork);
};
