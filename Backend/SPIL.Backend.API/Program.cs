using Microsoft.EntityFrameworkCore;
using SPIL.Backend.Infrastructure.Data;
using SPIL.Backend.Infrastructure.Repositories;
using SPIL.Backend.Application.Services;
using SPIL.Backend.Application.Interfaces;
using AutoMapper;
using SPIL.Backend.Application.Mapping;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext: default to SQLite for quick local runs. See README to switch to SQL Server.
var conn = builder.Configuration.GetConnectionString("DefaultConnection") ?? "Data Source=spil.db";
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlite(conn));

// DI registrations
builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IOrderService, OrderService>();

// AutoMapper
builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();

// Apply migrations at startup (safe for development)
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
