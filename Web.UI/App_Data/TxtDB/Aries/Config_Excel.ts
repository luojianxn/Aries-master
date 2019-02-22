{"ColumnName":"ExcelID","SqlType":"System.Guid","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":36,"Scale":0,"IsPrimaryKey":true,"DefaultValue":[#GUID],"Description":"����","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"ExcelName","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"Excel����","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"Description","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":100,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"ģ������","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"TableNames","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":400,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"�������������ŷָ�","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"StartIndex","SqlType":"System.Int32","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":10,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"(0)","Description":"��ʼ����","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"HeadCrossRowNum","SqlType":"System.Int32","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":10,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"(1)","Description":"��ͷ�缸��","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"WhereType","SqlType":"System.Byte","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":3,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"(0)","Description":"������ʽ��and��or��","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"AcceptType","SqlType":"System.Byte","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":3,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"(0)","Description":"�������ͣ�0���������£�1�������룻2�������£�","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"CreateTime","SqlType":"System.DateTime","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":23,"Scale":3,"IsPrimaryKey":false,"DefaultValue":[#GETDATE],"Description":"����ʱ��","TableName":"Config_Excel","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""}