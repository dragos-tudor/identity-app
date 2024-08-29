using System.Collections.Generic;

namespace Identity.Endpoints;

public record class UserResponse(string UserName, string SchemeName, IEnumerable<string> UserClaims);