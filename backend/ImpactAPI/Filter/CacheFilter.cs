using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Memory;

namespace ImpactAPI.Filter
{
    public class CacheFilter : IResourceFilter
    {
        private readonly IMemoryCache _memorycache;

        public CacheFilter(IMemoryCache memorycache)
        {
            _memorycache = memorycache;
        }


        public void OnResourceExecuting(ResourceExecutingContext context)
        {
            if (context.HttpContext.Request.Method == "GET")
            {
                var key = context.HttpContext.Request.Path;
                var value = _memorycache.TryGetValue(key, out object? json);
                if (value)
                {
                    context.Result = new OkObjectResult(json);
                }
            }
        }

        public void OnResourceExecuted(ResourceExecutedContext context)
        {

            if (context.HttpContext.Request.Method == "GET")
            {
                var key = context.HttpContext.Request.Path;
                if (!_memorycache.TryGetValue(key, out object? _))
                {
                    OkObjectResult? okResult = context.Result as OkObjectResult;
                    if (okResult != null)
                    {
                        var memoryCacheEntryOptions = new MemoryCacheEntryOptions
                        {
                            AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(10)
                        };
                        _memorycache.Set(
                            key,
                            okResult.Value,
                            memoryCacheEntryOptions
                            );
                    }
                }
            }
        }
    }
}
