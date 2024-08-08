using System.Threading.Tasks;

namespace Identity.Endpoints;

partial class EndpointsFuncs
{
  static Task SimulateLongProcess (int delay) => Task.Delay(delay);
}