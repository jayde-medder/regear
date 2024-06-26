/* import { useState } from 'react'
import StatusBar from '../../General/StatusBars/StatusBar'
import { NewItem } from '../../../../models/item'
import { addNewInventoryItem, getAllTags } from '../../../apis/apiItem'
import { useQuery } from '@tanstack/react-query'

export default function AddInventoryForm() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery(['tag'], () => getAllTags())
  // Define state variables to store form inputs
  const [itemName, setItemName] = useState('')
  const [faulty, setFaulty] = useState(false)
  const [image, setImage] = useState<null | File>(null)
  const [category, setCategory] = useState('')
  const [categoryId, setCategoryId] = useState<null | number>(null)
  const [description, setDescription] = useState('')
  const [weight, setWeight] = useState<string | number>('')
  const [location, setLocation] = useState('')
  const [owner, setOwner] = useState('')
  const [certificationNeeded, setCertificationNeeded] = useState(false)
  const [certificationExpiryDate, setCertificationExpiryDate] =
    useState<string>('')

  const [itemAddedStatus, setItemAddedStatus] = useState<boolean>(false)

  const handleCategoryChange = (e: { target: { value: any } }) => {
    const selectedCategory = e.target.value
    // Find the selected category object from categories state
    const selectedCategoryObject = categories?.find(
      (cat) => cat.name === selectedCategory
    )
    if (selectedCategoryObject) {
      setCategory(selectedCategory)
      setCategoryId(selectedCategoryObject.id)
    }
  }

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Here you can handle form submission, for example, send data to server
    const formData = {
      itemName,
      faulty,
      image,
      categoryId,
      description,
      weight,
      location,
      owner,
      certificationNeeded,
      certificationExpiryDate,
    }
    submitFormData(formData)

    console.log(formData)
  }

  const submitFormData = async (formData: NewItem) => {
    const res = await addNewInventoryItem(formData)
    if (res == 200) {
      setItemAddedStatus(true)
      setTimeout(() => {
        setItemAddedStatus(false)
      }, 1500)
      resetForm()
    }
  }

  const resetForm = () => {
    setItemName('')
    setFaulty(false)
    setImage(null)
    setCategory('')
    setDescription('')
    setWeight('')
    setLocation('')
    setOwner('')
    setCertificationNeeded(false)
    setCertificationExpiryDate('')
  }

  if (isError)
    return (
      <>
        <h2>
          There seems to be a problem accessing the inventory. Please send us a
          request
        </h2>
      </>
    )

  if (isLoading)
    return (
      <>
        <h2>...Loading... </h2>
      </>
    )

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Faulty:
            <select
              value={faulty ? 'true' : 'false'}
              onChange={(e) => setFaulty(e.target.value === 'true')}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Image:
            <input
              type="file"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Select a category...</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Weight:
            <input
              type="text"
              pattern="[0-9]*"
              value={weight}
              onChange={(e) => {
                const value = e.target.value
                // Only update state if the input value matches the pattern or is an empty string
                if (value === '') {
                  setWeight(value)
                } else if (/^[0-9]*$/.test(value)) {
                  setWeight(Number(value))
                }
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Owner:
            <input
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Certification Needed:
            <select
              value={certificationNeeded ? 'true' : 'false'}
              onChange={(e) =>
                setCertificationNeeded(e.target.value === 'true')
              }
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
        </div>
        {certificationNeeded && (
          <div>
            <label>
              Certification Expiry Date:
              <input
                type="date"
                value={certificationExpiryDate}
                onChange={(e) => setCertificationExpiryDate(e.target.value)}
              />
            </label>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>

      <div>
        {itemAddedStatus && (
          <StatusBar colour="green" message="Item added to the Inventory" />
        )}
      </div>
    </div>
  )
}
 */
