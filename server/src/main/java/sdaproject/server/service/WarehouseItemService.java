package sdaproject.server.service;

import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.WarehouseItemDTO;
import sdaproject.server.entity.WarehouseItemEntity;

import java.util.List;

public interface WarehouseItemService extends AbstractService<WarehouseItemEntity, WarehouseItemDTO> {
    List<DictionaryDTO> getWarehouseItemDictionary();
}
