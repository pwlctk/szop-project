package sdaproject.server.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "warehouse_item")
public class WarehouseItemEntity extends AbstractEntity {
    @Column
    private Integer quantity;
    @Column
    private BigDecimal price;
    @OneToOne
    @JoinColumn(name = "product_id")
    private ProductEntity productEntity;

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public ProductEntity getProductEntity() {
        return productEntity;
    }

    public void setProductEntity(ProductEntity productEntity) {
        this.productEntity = productEntity;
    }
}
