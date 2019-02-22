﻿using Aries.Core.Config;
using Aries.Core.Extend;
using CYQ.Data;
using CYQ.Data.Table;
using CYQ.Data.Tool;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace Aries.Controllers
{
    public class DemoController : Aries.Core.Controller
    {
        protected override MDataRow GetOne()
        {
            switch (ObjName)
            {
                case "V_Test"://处理Demo中文本数据库
                    if (AppConfig.DB.DefaultDalType == DalType.Txt)
                    {
                        return Select(GridConfig.SelectType.Show).Rows[0];
                    }
                    break;
            }
            return base.GetOne();
        }
        protected override MDataTable Select(GridConfig.SelectType st)
        {
            switch (ObjName)
            {
                case "V_Test"://处理Demo中文本数据库
                    MDataTable dt = null;
                    using (MAction action = new MAction(CrossDb.GetEnum("Demo_TestA")))
                    {
                        dt = action.Select();
                    }
                    dt.JoinOnName = "ID";
                    MDataTable joinDt = dt.Join("Demo_TestB", "ID");
                    return joinDt.Select(PageIndex, PageSize, GetWhere() + GetOrderBy("ID"), GridConfig.GetSelectColumns(ObjName, st));
            }
            return base.Select(st);
        }
        public void GetProgressShow()
        {
            MDataTable dt = null;
            using (MAction action = new MAction("progressSHOW", "HdConn")) 
            {
               
                dt = action.Select();
               
            }
            jsonResult = dt.ToJson().ToString().ToLower(); ;
         
         }
    }
}
