using Blazor_0._1.Localization;
using Microsoft.AspNetCore.Blazor.Browser.Rendering;
using Microsoft.AspNetCore.Blazor.Browser.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Net.Http;

namespace Blazor_0._1
{
    public class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = new BrowserServiceProvider(services =>
            {
                services.AddSingleton<Localizator>();
            });

            new BrowserRenderer(serviceProvider).AddComponent<App>("app");
        }
    }
}
