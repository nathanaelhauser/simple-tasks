module.exports = (model, Schema) => {
  const Task = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    notes: String,
  }, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  })

  return model( 'Task', Task )
}