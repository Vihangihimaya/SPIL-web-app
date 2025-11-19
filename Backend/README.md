# SPIL Backend (starter)

This folder contains a minimal .NET 7 Web API scaffold that follows the layered architecture described in your specification:

- API: `SPIL.Backend.API`
- Application: DTOs, Services, Mapping
- Domain: Entities
- Infrastructure: Data (EF Core DbContext) and Repositories

The project is configured to use SQLite by default for easy local runs. To use SQL Server in development or production, update the connection string in `SPIL.Backend.API/appsettings.json` and change the `UseSqlite` call in `Program.cs` to `UseSqlServer`.

Quick run (PowerShell):

```powershell
cd "c:\Users\vihan\OneDrive\Desktop\SPIL-Web Application\web app\Backend\SPIL.Backend.API"
dotnet restore
dotnet tool install --global dotnet-ef -v q
dotnet ef migrations add InitialCreate -o ../Migrations
dotnet ef database update
dotnet run
```

Notes:
- If you prefer SQL Server, set `"DefaultConnection": "Server=localhost;Database=spil;User Id=sa;Password=Your_password123;TrustServerCertificate=True;"` and change the DbContext configuration to `UseSqlServer` in `Program.cs`.
- The scaffold is intentionally minimal; expand services, DTOs, validation, logging, and authentication as next steps.
