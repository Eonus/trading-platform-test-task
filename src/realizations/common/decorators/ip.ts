import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { Request as ExpressRequest } from "express"

const getIpFromReq = (req: ExpressRequest): string | undefined => {
  let ip = (req.headers["x-forwarded-for"] as string | undefined) || req.socket.remoteAddress
  if (ip?.substring(0, 7) === "::ffff:") {
    ip = ip.substring(7)
  }
  return ip
}

export const IpExtended = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  return getIpFromReq(request)
})
