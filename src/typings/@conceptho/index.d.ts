interface ServiceInterface {
  actionCreate?({ model, serviceContext }: any): Promise<any>
  actionFindOrCreate?({ whereAttributes, modelData, serviceContext, byActive } : any): Promise<any>
  actionUpdate?({ model, serviceContext }: any): Promise<any>
  actionDelete?({ model, serviceContext }: any, softDelete: boolean): Promise<any>
  actionUndelete?({ model, serviceContext }: any): Promise<any>
  actionFind?({ whereAttributes, byActive, serviceContext }: any): Promise<any>
  create?({ model, serviceContext }: any): Promise<any>
  findOrCreate?({ whereAttributes, modelData, serviceContext, byActive } : any): Promise<any>
  update?({ model, serviceContext }: any): Promise<any>
  delete?({ model, serviceContext }: any, softDelete: boolean): Promise<any>
  undelete?({ model, serviceContext }: any): Promise<any>
  find?({ whereAttributes, byActive, serviceContext }: any): Promise<any>
  query?({ byActive, serviceContext }: any): any
}
