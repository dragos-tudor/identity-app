using System.Collections.Generic;

namespace Identity.Endpoints;

public record class UserInfoResponse(string UserName, string SchemeName, IEnumerable<string> UserClaims);