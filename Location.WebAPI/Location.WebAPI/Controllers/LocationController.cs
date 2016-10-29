using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Location.WebAPI.Controllers
{
    public class LocationController : ApiController
    {
        [System.Web.Http.HttpGet]
        public Models.Location Index(string cityName)
        {
            return new Models.Location() { Latitude = 10, Longitude = 20 };
        }
    }
}