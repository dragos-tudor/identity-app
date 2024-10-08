
using Microsoft.Extensions.Configuration;

namespace Identity.Api;

partial class ApiFuncs
{
  static TwitterOptions SetTwitterOptions(ConfigurationManager configuration) =>
    CreateTwitterOptions(configuration["Secrets:Twitter:ConsumerKey"]!, configuration["Secrets:Twitter:ConsumerSecret"]!) with {
      CallbackPath = $"/accounts{TwitterDefaults.CallbackPath}",
      ChallengePath = $"/accounts{TwitterDefaults.ChallengePath}"
    };
}