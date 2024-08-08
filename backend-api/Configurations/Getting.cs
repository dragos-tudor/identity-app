
using Microsoft.Extensions.Configuration;

namespace Identity.Api;

partial class ApiFuncs
{
  static string[] GetCorsOrigins (ConfigurationManager configuration) => [ configuration["Cors:Origins:0"]! ];
}