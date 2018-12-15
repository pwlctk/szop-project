package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import sdaproject.server.converter.Converter;
import sdaproject.server.converter.WarehouseItemConverter;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.WarehouseItemDTO;
import sdaproject.server.entity.WarehouseItemEntity;
import sdaproject.server.repository.WarehouseItemRepository;
import sdaproject.server.service.WarehouseItemService;

import java.util.List;

@Service
public class WarehouseItemServiceImpl extends AbstractServiceImpl<WarehouseItemEntity, WarehouseItemDTO> implements WarehouseItemService {

    private final WarehouseItemRepository repository;
    private final WarehouseItemConverter converter;

    public WarehouseItemServiceImpl(WarehouseItemRepository repository, WarehouseItemConverter converter) {
        this.repository = repository;
        this.converter = converter;
    }

    @Override
    protected JpaRepository<WarehouseItemEntity, Long> getRepo() {
        return repository;
    }

    @Override
    protected Converter<WarehouseItemEntity, WarehouseItemDTO> getConverter() {
        return converter;
    }

    @Override
    public List<DictionaryDTO> getWarehouseItemDictionary() {
        return repository.getWarehouseItemDictionary();
    }
}
