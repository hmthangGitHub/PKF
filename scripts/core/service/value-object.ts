export interface IDomainValueObject {
    from(data?: any): void;
}

export interface DomainValueClass<T> {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    new (): T;

    create(data?: any): T;
}

export class DomainValueObject {
    static createFromProto<T extends IDomainValueObject, DataType>(
        domainClass: DomainValueClass<T>,
        data?: DataType
    ): T {
        // eslint-disable-next-line new-cap
        const instance = new domainClass();
        if (data) {
            instance.from(data);
        }
        return instance;
    }
}

export class DomainValueObjectArray {
    static cloneFromProto<T extends IDomainValueObject, ProtoType>(
        domainValueClass: DomainValueClass<T>,
        valueObjectArray: T[],
        protoArray?: ProtoType[]
    ) {
        // clear array
        valueObjectArray.length = 0;
        // clone proto array if exist
        protoArray?.forEach((item) => {
            valueObjectArray.push(domainValueClass.create(item));
        });
    }
}
