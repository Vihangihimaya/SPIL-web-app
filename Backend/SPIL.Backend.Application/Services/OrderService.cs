using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using SPIL.Backend.Application.DTOs;
using SPIL.Backend.Application.Interfaces;
using SPIL.Backend.Domain.Entities;
using SPIL.Backend.Infrastructure.Repositories;

namespace SPIL.Backend.Application.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _repo;
        private readonly IMapper _mapper;

        public OrderService(IOrderRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<OrderDto> CreateAsync(OrderDto dto)
        {
            var entity = _mapper.Map<Order>(dto);
            await _repo.AddAsync(entity);
            await _repo.SaveChangesAsync();
            return _mapper.Map<OrderDto>(entity);
        }

        public async Task<IEnumerable<OrderDto>> GetAllAsync()
        {
            var list = await _repo.GetAllAsync();
            return _mapper.Map<IEnumerable<OrderDto>>(list);
        }

        public async Task<OrderDto?> GetByIdAsync(int id)
        {
            var entity = await _repo.GetByIdAsync(id);
            return entity is null ? null : _mapper.Map<OrderDto>(entity);
        }
    }
}
