using System.Collections.Generic;
using System.Threading.Tasks;
using SPIL.Backend.Domain.Entities;

namespace SPIL.Backend.Infrastructure.Repositories
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetAllAsync();
        Task<Order?> GetByIdAsync(int id);
        Task AddAsync(Order order);
        Task SaveChangesAsync();
    }
}
