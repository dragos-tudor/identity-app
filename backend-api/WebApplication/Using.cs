#pragma warning disable CA1305

namespace Identity.Api;

partial class ApiFuncs
{
  static IApplicationBuilder UseMiddlewares (WebApplication app) =>
    app
      .UseExceptionHandler()
      .UseRouting()
      .UseCors()
      .UseAuthentication(AuthenticateCookie)
      .UseAuthorization(
        (context, _) => UnauthenticateCookie(context).ToString(),
        (context, _) => UnauthorizeCookie(context).ToString());
}