using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Identity.Endpoints;

partial class EndpointsFuncs
{
  public static async Task<Results<Ok, ProblemHttpResult>> SignInAccount(
    HttpContext context,
    CookieAuthenticationOptions authOptions,
    CredentialsRequest credentials)
  {
    await SimulateLongProcess(500);
    if (ValidateCredentials(credentials) is string valError) return Problem(valError); // TODO: use ValidationProblem
    if (!VerifyCredentials(credentials)) return Problem("Invalid user name or password"); //TODO: globalization support

    var principal = CreatePrincipal(authOptions.SchemeName, [CreateNameClaim(credentials.UserName)]);
    await SignInCookie(context, principal, CreateAuthenticationProperties());
    return Ok();
  }
}