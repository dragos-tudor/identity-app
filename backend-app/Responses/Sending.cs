
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Identity.App;

partial class AppFuncs
{
  static Task SendFileResponse (
    HttpResponse response,
    string fileName,
    CancellationToken cancellationToken)
  =>
    response.SendFileAsync(GetFileInfo(fileName), cancellationToken);
}