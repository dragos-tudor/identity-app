
namespace Identity.Api;

partial class ApiFuncs
{
  static CookieAuthenticationOptions SetCookieOptions() =>
    CreateCookieAuthenticationOptions();

  static CookieBuilder SetCookieBuilderSameSite (CookieBuilder cookieBuilder, SameSiteMode sameSiteMode) {
    cookieBuilder.SameSite = sameSiteMode;
    return cookieBuilder;
  }
}