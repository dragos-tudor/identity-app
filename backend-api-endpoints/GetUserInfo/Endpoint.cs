using Microsoft.AspNetCore.Http.HttpResults;

namespace Identity.Endpoints;

partial class EndpointsFuncs
{
  public static Ok<UserInfoResponse> GetUserInfo(HttpContext context) =>
    Ok(BuildUserInfoResponse(context.User));
}