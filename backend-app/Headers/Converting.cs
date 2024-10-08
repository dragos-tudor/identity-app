
using System;
using System.Globalization;

namespace Identity.App;

partial class AppFuncs
{
  static string ToSecondsString (TimeSpan interval) => interval.TotalSeconds.ToString(CultureInfo.InvariantCulture);

  static string ToDayDateTimeString (DateTime date) => date.ToString("R", CultureInfo.InvariantCulture);
}