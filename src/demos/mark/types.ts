export interface IMention {
  openId: string
  userId: string
  userName: string
  offset: number
  length: number
}

export interface IPerson {
  userId: string
  userName: string
  deptName: string
}

export enum NodeType {
  text = 'text',
  br = 'br',
  at = 'at',
}

export interface IAtData {
  openId: string
  userId: string
  userName: string
}

export interface INode {
  type: NodeType
  data: IAtData | string
}

// NodeList => MentionData
export const transformNodeListToMentionData = (nodeList: INode[]) => {
  let pureString = ''
  const mentionList: IMention[] = []
  nodeList.forEach((item) => {
    if (item.type === NodeType.text || item.type === NodeType.br) {
      pureString += item.data
    }
    if (item.type === NodeType.at) {
      mentionList.push({
        openId: item.data?.openId,
        userId: item.data?.userId,
        userName: item.data?.userName,
        length: item.data?.userName.length + 1,
        offset: pureString.length,
      })
      pureString += '@' + item.data?.userName
    }
  })
  return { pureString, mentionList }
}

// MentionData => NodeList
export const transformMentionDataToNodeList = (
  pureString: string,
  mentionList: IMention[]
): INode[] => {
  let cutStart = 0
  const nodeList: INode[] = []
  if (mentionList && mentionList.length > 0) {
    mentionList.forEach((item) => {
      const { offset, length: nameLength } = item
      const textPart = pureString.slice(cutStart, offset)
      if (textPart.length > 0) {
        nodeList.push({
          type: NodeType.text,
          data: textPart,
        })
      }
      nodeList.push({
        type: NodeType.at,
        data: {
          openId: item.openId,
          userId: item.userId,
          userName: item.userName,
        },
      })
      cutStart = offset + nameLength
    })
    const remainText = pureString.slice(cutStart)
    if (remainText.length > 0) {
      nodeList.push({
        type: NodeType.text,
        data: remainText,
      })
    }
  } else {
    if (pureString && pureString.length > 0) {
      nodeList.push({
        type: NodeType.text,
        data: pureString,
      })
    }
  }
  return nodeList
}
