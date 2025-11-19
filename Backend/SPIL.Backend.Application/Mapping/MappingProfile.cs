using AutoMapper;
using SPIL.Backend.Application.DTOs;
using SPIL.Backend.Domain.Entities;

namespace SPIL.Backend.Application.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Order, OrderDto>().ReverseMap();
        }
    }
}
