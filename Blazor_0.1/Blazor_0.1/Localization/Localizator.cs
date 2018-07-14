using Microsoft.AspNetCore.Blazor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Blazor_0._1.Localization
{
    public class Localizator
    {
        private LocalStrings localStrings = new LocalStrings();
        private readonly HttpClient httpClient;

        public Localizator(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }

        public async Task Load(string lang)
        {
            var content = await httpClient.GetStringAsync($"/Localizations/{lang}.json");
            localStrings = JsonUtil.Deserialize<LocalStrings>(content);
        }

        public LocalStrings Current => localStrings;
    }
}
