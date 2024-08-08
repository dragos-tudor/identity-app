using Microsoft.Extensions.DependencyInjection;

namespace Identity.App;

partial class AppFuncs
{
  static IServiceCollection AddServices(IServiceCollection services) =>
    services.AddLogging();
}