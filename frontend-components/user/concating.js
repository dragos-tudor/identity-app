
export const concatUserClaim = (result, claim) => result + (result? ", ": "") + claim

export const concatUserClaims = (claims) => claims.reduce(concatUserClaim, "")