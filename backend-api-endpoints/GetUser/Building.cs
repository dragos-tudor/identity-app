using System.Security.Claims;

namespace Identity.Endpoints;

partial class EndpointsFuncs
{
  static UserResponse BuildUserResponse (ClaimsPrincipal principal) =>
    new (
      GetPrincipalName(principal)!,
      GetUserSchemeName(principal)!,
      GetUserClaims(principal)
    );
}