using Microsoft.AspNetCore.Http.HttpResults;

namespace Identity.Endpoints;

partial class EndpointsFuncs
{
  public static Results<Ok, UnauthorizedHttpResult> GetAccountStatus(HttpContext context) => IsAuthenticatedPrincipal(context.User)? Ok(): Unauthorized();
}