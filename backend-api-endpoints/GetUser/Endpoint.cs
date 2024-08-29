using Microsoft.AspNetCore.Http.HttpResults;

namespace Identity.Endpoints;

partial class EndpointsFuncs
{
  public static Ok<UserResponse> GetUser(HttpContext context) => Ok(BuildUserResponse(context.User));
}