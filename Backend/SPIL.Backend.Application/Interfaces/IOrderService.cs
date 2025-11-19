using System.Collections.Generic;
using System.Threading.Tasks;
using SPIL.Backend.Application.DTOs;

namespace SPIL.Backend.Application.Interfaces
{
    public interface IOrderService
    {
        Task<IEnumerable<OrderDto>> GetAllAsync();
        Task<OrderDto?> GetByIdAsync(int id);
        Task<OrderDto> CreateAsync(OrderDto dto);
    }
}
