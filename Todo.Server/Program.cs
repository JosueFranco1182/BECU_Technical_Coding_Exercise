
namespace Todo.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowFrontend",
                    builder => builder
                        .WithOrigins("http://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
            });
            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

           

            app.UseCors("AllowFrontend");

            // Configure the HTTP request pipeline.

            // app.UseHttpsRedirection();

            // app.UseAuthorization();

            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
