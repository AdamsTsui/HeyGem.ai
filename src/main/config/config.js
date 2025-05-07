import path from 'path'
import os from 'os'

const isDev = process.env.NODE_ENV === 'development'
const isWin = process.platform === 'win32'
const serverIp = '172.25.100.101'

export const serviceUrl = {
  face2face: isDev ? `http://${serverIp}:8383/easy` : `http://${serverIp}:8383/easy`,
  tts: isDev ? `http://${serverIp}:18180` : `http://${serverIp}:18180`
}

export const assetPath = {
  model: isWin
    ? path.join(`\\\\${serverIp}`, 'heygem_data', 'face2face', 'temp')
    : path.join(os.homedir(), 'heygem_data', 'face2face', 'temp'), // 模特视频
  ttsProduct: isWin
    ? path.join(`\\\\${serverIp}`, 'heygem_data', 'face2face', 'temp')
    : path.join(os.homedir(), 'heygem_data', 'face2face', 'temp'), // TTS 产物
  ttsRoot: isWin
    ? path.join(`\\\\${serverIp}`, 'heygem_data', 'voice', 'data')
    : path.join(os.homedir(), 'heygem_data', 'voice', 'data'), // TTS服务根目录
  ttsTrain: isWin
    ? path.join(`\\\\${serverIp}`, 'heygem_data', 'voice', 'data', 'origin_audio')
    : path.join(os.homedir(), 'heygem_data', 'voice', 'data', 'origin_audio') // TTS 训练产物
}
