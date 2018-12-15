package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.entity.WarehouseItemEntity;

import java.util.List;

@Repository
public interface WarehouseItemRepository extends JpaRepository<WarehouseItemEntity, Long> {

    @Query("SELECT new sdaproject.server.dto.DictionaryDTO(id) FROM WarehouseItemEntity ")
    List<DictionaryDTO> getWarehouseItemDictionary();

}
