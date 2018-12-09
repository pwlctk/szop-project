package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;

@Component
public class ProductConverter implements Converter<ProductEntity, ProductDTO> {

    private final ProductCategoryConverter productCategoryConverter;

    public ProductConverter(ProductCategoryConverter productCategoryConverter) {
        this.productCategoryConverter = productCategoryConverter;
    }

    @Override
    public ProductEntity convertToEntity(ProductDTO dto) {
        ProductEntity entity = new ProductEntity();

        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setPrice(dto.getPrice());
        entity.setDescription(dto.getDescription());
        entity.setProductCategoryEntity(productCategoryConverter.convertToEntity(dto.getProductCategoryDTO()));

        return entity;
    }

    @Override
    public ProductDTO convertToDto(ProductEntity entity) {
        ProductDTO dto = new ProductDTO();

        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setPrice(entity.getPrice());
        dto.setDescription(entity.getDescription());
        dto.setProductCategoryDTO(productCategoryConverter.convertToDto(entity.getProductCategoryEntity()));

        return dto;
    }
}
