
using Microsoft.Extensions.Configuration;

namespace Identity.App;

partial class AppFuncs
{
  static IConfigurationBuilder AddCommandLine (ConfigurationManager configuration, string[] args) =>
    configuration.AddCommandLine(args);

  static IConfigurationBuilder AddEnvironmentVariables (ConfigurationManager configuration) =>
    configuration.AddEnvironmentVariables();

  static IConfigurationBuilder AddSettings (ConfigurationManager configuration) =>
    configuration.AddJsonFile("settings.json");
}