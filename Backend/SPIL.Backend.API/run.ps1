param(
    [switch]$UseSqlServer
)

$ErrorActionPreference = 'Stop'

$apiDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $apiDir

Write-Host "Restoring packages..."
dotnet restore

Write-Host "Ensuring dotnet-ef tool is available..."
try {
    dotnet tool install --global dotnet-ef -v q
} catch {
    Write-Host "dotnet-ef already installed or installation failed silently. Proceeding..."
}

if ($UseSqlServer) {
    Write-Host "Using SQL Server: ensure you updated appsettings.json and SQL Server is running."
} else {
    Write-Host "Using default SQLite database (spil.db)."
}

Write-Host "Adding initial migration (if not present)..."
try {
    dotnet ef migrations add InitialCreate -o ..\Migrations
} catch {
    Write-Host "Migration may already exist or dotnet-ef failed: $($_.Exception.Message)"
}

Write-Host "Applying migrations to database..."
dotnet ef database update

Write-Host "Starting the API (dotnet run)..."
dotnet run
