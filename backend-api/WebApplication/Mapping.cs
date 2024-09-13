
namespace Identity.Api;

partial class ApiFuncs
{
  static WebApplication MapEndpoints (WebApplication app)
  {
    app.MapPost("/accounts/signin", SignInAccount);
    app.MapPost("/accounts/signout", SignOutAccount).RequireAuthorization();
    app.MapGet("/accounts/status", GetAccountStatus);
    app.MapGet("/users", GetUser).RequireAuthorization();

    app.MapFacebook(ResolveRequiredService<FacebookOptions>(app.Services), SignInCookie);
    app.MapGoogle(ResolveRequiredService<GoogleOptions>(app.Services), SignInCookie);
    app.MapTwitter(ResolveRequiredService<TwitterOptions>(app.Services), SignInCookie);
    return app;
  }
}