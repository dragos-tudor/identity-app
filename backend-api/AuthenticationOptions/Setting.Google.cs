
using Microsoft.Extensions.Configuration;

namespace Identity.Api;

partial class ApiFuncs
{
  static GoogleOptions SetGoogleOptions(ConfigurationManager configuration) =>
    CreateGoogleOptions(configuration["Secrets:Google:ClientId"]!, configuration["Secrets:Google:ClientSecret"]!) with {
      CallbackPath = $"/accounts{GoogleDefaults.CallbackPath}",
      ChallengePath = $"/accounts{GoogleDefaults.ChallengePath}"
    };
}