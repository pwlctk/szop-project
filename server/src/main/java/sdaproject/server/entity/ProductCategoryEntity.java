package sdaproject.server.entity;

import javax.persistence.*;

@Entity
@Table(name = "product_category")
public class ProductCategoryEntity extends AbstractEntity {

    @Column
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
