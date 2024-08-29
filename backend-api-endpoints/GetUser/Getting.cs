using System.Linq;
using System.Security.Claims;

namespace Identity.Endpoints;

partial class EndpointsFuncs
{
  static string? GetUserSchemeName (ClaimsPrincipal principal) => GetPrincipalIdentity(principal)?.AuthenticationType;

  static string[] GetUserClaims (ClaimsPrincipal principal) => principal.Claims.Select(claim => claim.Value).ToArray();
}