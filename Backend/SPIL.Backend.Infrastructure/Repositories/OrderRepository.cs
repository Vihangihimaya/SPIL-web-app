using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SPIL.Backend.Domain.Entities;
using SPIL.Backend.Infrastructure.Data;

namespace SPIL.Backend.Infrastructure.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext _db;

        public OrderRepository(AppDbContext db)
        {
            _db = db;
        }

        public async Task AddAsync(Order order)
        {
            await _db.Orders.AddAsync(order);
        }

        public async Task<IEnumerable<Order>> GetAllAsync()
        {
            return await _db.Orders.AsNoTracking().ToListAsync();
        }

        public async Task<Order?> GetByIdAsync(int id)
        {
            return await _db.Orders.FindAsync(id);
        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }
    }
}
