
using Microsoft.Extensions.Configuration;

namespace Identity.Api;

partial class ApiFuncs
{
  static FacebookOptions SetFacebookOptions(ConfigurationManager configuration) =>
    CreateFacebookOptions(configuration["Secrets:Facebook:AppId"]!, configuration["Secrets:Facebook:AppSecret"]!) with {
      CallbackPath = $"/accounts{FacebookDefaults.CallbackPath}",
      ChallengePath = $"/accounts{FacebookDefaults.ChallengePath}"
    };
}