export interface IValueObject {
    /** clone form proto object */
    fromProto(data?: any): void;
}

export interface ValueObjectClass<T> {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    new (): T;
}

export class ValueObject {
    /** create value other form proto object */
    static fromProto<T extends IValueObject, DataType>(domainClass: ValueObjectClass<T>, data?: DataType): T {
        // eslint-disable-next-line new-cap
        const instance = new domainClass();
        if (data) {
            instance.fromProto(data);
        }
        return instance;
    }
}

export class ValueObjectArray {
    /** create value object array form proto object array */
    static fromProto<T extends IValueObject, ProtoType>(
        valueObjectClass: ValueObjectClass<T>,
        protoArray?: ProtoType[]
    ): T[] {
        const valueObjectArray = new Array<T>();
        // clone proto array if exist
        protoArray?.forEach((item: ProtoType) => {
            valueObjectArray.push(ValueObject.fromProto(valueObjectClass, item));
        });

        return valueObjectArray;
    }

    /** clone specific value object array form proto object array */
    static cloneFromProto<T extends IValueObject, ProtoType>(
        valueObjectClass: ValueObjectClass<T>,
        valueObjectArray: T[],
        protoArray?: ProtoType[]
    ) {
        // clear array
        valueObjectArray.length = 0;
        // clone proto array if exist
        protoArray?.forEach((item: ProtoType) => {
            valueObjectArray.push(ValueObject.fromProto(valueObjectClass, item));
        });
    }
}
