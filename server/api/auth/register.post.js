// 导入`sendError`方法从`h3`库，用于处理和发送错误响应
import {sendError} from "h3"

// 定义并导出一个异步事件处理器
export default defineEventHandler(async (event) => {
        // 使用`readBody`方法从请求中读取请求体内容
        const body = await readBody(event)

        // 从请求体中解构提取出用户名、密码、重复密码、电子邮件和名字
        const {username, password, repeatPassword, email, name} = body

        // 验证所有必需的字段是否都已提供，如果有任何一个缺失，则返回400错误
        if (!username || !password || !repeatPassword || !email || !name) {
            // 使用`sendError`方法发送一个包含400状态码和错误信息的响应
            return sendError(event, createError({statusCode: 400, statusMessage: "Invalid request"}))
        }


        // 如果所有必需的字段都已提供，则返回请求体内容
        // 这里只是作为示例，实际应用中应当进行进一步的处理，如验证、存储数据等
        return {
            body
        }
    }
)
